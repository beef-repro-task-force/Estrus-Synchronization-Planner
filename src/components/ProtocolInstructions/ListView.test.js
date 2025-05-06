import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListView from './ListView';

describe('ListView Component', () => {
  const mockProps = {
    UserFlow: 3,
    setUserFlow: jest.fn(),
    ListOfInstrucitons: [
      {
        OnDay: 0,
        step1: 'Inject 2cc Cystorelin (GnRH)',
        step2: '<<ai_after_standing_heat>>',
        step3: 'Apply CIDR device',
        step4: '<<current_time>>',
        step5: ''
      },
      {
        OnDay: 7,
        step1: 'Remove CIDR',
        step2: '<<cidr_device>>',
        step3: '',
        step4: '5cc Lutalyse (PG)',
        step5: ''
      }
    ],
    DateToStartBreeding: new Date('2024-03-20T02:00:00'),
    SynchronizationProtocol: 1,
    GNRH: 'Cystorelin',
    PG: 'Lutalyse',
    SemenType: 'Conventional'
  };

  const mockPropsWithSexed = {
    ...mockProps,
    SemenType: 'Conventional & Sexed',
    ListOfInstrucitons: [
      {
        ...mockProps.ListOfInstrucitons[0],
        step2: 'Breed females AI 16-22 hours after standing heat.'
      },
      mockProps.ListOfInstrucitons[1]
    ]
  };

  it('renders protocol number in header', () => {
    render(<ListView {...mockProps} />);
    expect(screen.getByText('Protocol #1')).toBeInTheDocument();
  });

  it('renders table with date and instructions columns', () => {
    render(<ListView {...mockProps} />);
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Instructions')).toBeInTheDocument();
  });

  it('renders instructions with conventional semen type', () => {
    render(<ListView {...mockProps} />);
    const element = screen.getByText((content, element) => {
      return content.includes('Breed females AI 10-14 hours after standing heat');
    });
    expect(element).toBeInTheDocument();
  });

  it('renders instructions with sexed semen type', () => {
    render(<ListView {...mockPropsWithSexed} />);
    const element = screen.getByText((content, element) => {
      return content.includes('Breed females AI 16-22 hours after standing heat');
    });
    expect(element).toBeInTheDocument();
  });

  it('handles back button click', () => {
    render(<ListView {...mockProps} />);
    fireEvent.click(screen.getByText('Back'));
    expect(mockProps.setUserFlow).toHaveBeenCalledWith(2);
  });

  it('handles print button click', () => {
    const mockPrint = jest.spyOn(window, 'print').mockImplementation(() => {});
    render(<ListView {...mockProps} />);
    fireEvent.click(screen.getByText('Print'));
    expect(mockPrint).toHaveBeenCalled();
    mockPrint.mockRestore();
  });

  it('formats dates correctly in table', () => {
    render(<ListView {...mockProps} />);
    const element = screen.getByText((content, element) => {
      return content.includes('3 / 20 / 2024');
    });
    expect(element).toBeInTheDocument();
  });

  it('displays weekday names', () => {
    render(<ListView {...mockProps} />);
    const elements = screen.getAllByText((content, element) => {
      return content.includes('Wednesday');
    });
    expect(elements.length).toBeGreaterThan(0);
  });

  it('handles different GNRH types', () => {
    const propsWithDifferentGNRH = {
      ...mockProps,
      GNRH: 'Factrel',
      ListOfInstrucitons: [
        {
          ...mockProps.ListOfInstrucitons[0],
          step1: 'Inject 2cc Factrel (GnRH)'
        },
        mockProps.ListOfInstrucitons[1]
      ]
    };
    render(<ListView {...propsWithDifferentGNRH} />);
    const element = screen.getByText((content, element) => {
      return content.includes('2cc Factrel');
    });
    expect(element).toBeInTheDocument();
  });

  it('handles different PG types', () => {
    const propsWithDifferentPG = {
      ...mockProps,
      PG: 'Estrumate',
      ListOfInstrucitons: [
        mockProps.ListOfInstrucitons[0],
        {
          ...mockProps.ListOfInstrucitons[1],
          step4: '2cc Estrumate (PG)'
        }
      ]
    };
    render(<ListView {...propsWithDifferentPG} />);
    const element = screen.getByText((content, element) => {
      return content.includes('2cc Estrumate');
    });
    expect(element).toBeInTheDocument();
  });
});