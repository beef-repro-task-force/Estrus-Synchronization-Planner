import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';

jest.mock('../components/userInput', () => {
  return function MockUserInput(props) {
    return (
      <div data-testid="user-input">
        <button onClick={() => props.setUserFlow(2)}>Next</button>
      </div>
    );
  };
});

jest.mock('../components/validProtocols', () => {
  return function MockValidProtocols(props) {
    return (
      <div data-testid="valid-protocols">
        <button onClick={() => props.setUserFlow(3)}>Next</button>
      </div>
    );
  };
});

jest.mock('../components/ProtocolInstructions/ProtocolInstructions', () => {
  return function MockProtocolInstructions() {
    return <div data-testid="protocol-instructions">Protocol Instructions Component</div>;
  };
});

// Mock the fetch function
global.fetch = jest.fn();

describe('Home Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    global.fetch = jest.fn(() =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve({
            json: () => Promise.resolve({
              Parameters: ['param1', 'param2'],
              Protocols: ['protocol1', 'protocol2']
            })
          });
        }, 100);
      })
    );
  });

  it('should show loading state initially', async () => {
    render(<Home />);
    const loadingElement = screen.getByTestId('loading-spinner');
    expect(loadingElement).toBeInTheDocument();
  });

  it('should fetch data on mount', async () => {
    render(<Home />);
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        '/Estrus-Synchronization-Planner/json-files/data.json'
      );
    });
  });

  it('should render UserInput component after data loads', async () => {
    render(<Home />);
    await waitFor(() => {
      const userInputElement = screen.getByTestId('user-input');
      expect(userInputElement).toBeInTheDocument();
    });
  });

  it('should handle fetch error gracefully', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const mockError = new Error('Fetch failed');
    global.fetch = jest.fn(() => Promise.reject(mockError));

    render(<Home />);
    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Error fetching data: ', mockError);
    });
    await waitFor(() => {
      expect(alertSpy).toHaveBeenCalledWith(mockError);
    });
    consoleSpy.mockRestore();
    alertSpy.mockRestore();
  });

  it('should render ValidProtocols component when UserFlow is 2', async () => {
    render(<Home />);

    await waitFor(() => {
      expect(screen.getByTestId('user-input')).toBeInTheDocument();
    });

    const nextButton = screen.getByText('Next');
    await act(async () => {
      nextButton.click();
    });

    // Check if ValidProtocols is rendered
    expect(screen.getByTestId('valid-protocols')).toBeInTheDocument();
  });

  it('should render ProtocolInstructions component when UserFlow is 3', async () => {
    render(<Home />);

    await waitFor(() => {
      expect(screen.getByTestId('user-input')).toBeInTheDocument();
    });

    const firstNextButton = screen.getByText('Next');
    await act(async () => {
      firstNextButton.click();
    });

    await waitFor(() => {
      expect(screen.getByTestId('valid-protocols')).toBeInTheDocument();
    });

    const secondNextButton = screen.getByText('Next');
    await act(async () => {
      secondNextButton.click();
    });

    expect(screen.getByTestId('protocol-instructions')).toBeInTheDocument();
  });

  it('should initialize with correct default values', async () => {
    render(<Home />);
    await waitFor(() => {
      const userInputElement = screen.getByTestId('user-input');
      expect(userInputElement).toBeInTheDocument();
    });
  });

  it('should update state with fetched data', async () => {
    const mockData = {
      Parameters: ['param1', 'param2'],
      Protocols: ['protocol1', 'protocol2']
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData)
      })
    );

    render(<Home />);

    await waitFor(() => {
      expect(screen.getByTestId('user-input')).toBeInTheDocument();
    });
  });
});