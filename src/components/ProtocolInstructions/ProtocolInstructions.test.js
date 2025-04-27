import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProtocolInstructions from './ProtocolInstructions';

jest.mock('./CalendarView', () => {
  return function MockCalendarView(props) {
    return <div data-testid="calendar-view">Calendar View</div>;
  };
});

jest.mock('./ListView', () => {
  return function MockListView(props) {
    return <div data-testid="list-view">List View</div>;
  };
});

describe('ProtocolInstructions Component', () => {
  const mockProps = {
    UserFlow: 3,
    setUserFlow: jest.fn(),
    DateToStartBreeding: new Date('2024-03-20'),
    SynchronizationProtocol: 1,
    GNRH: 'Cystorelin',
    PG: 'Lutalyse',
    BullTurnIn: 14,
    GestationPeriod: 281,
    SemenType: 'Conventional'
  };

  it('renders list view by default', () => {
    render(<ProtocolInstructions {...mockProps} />);
    expect(screen.getByTestId('list-view')).toBeInTheDocument();
  });

  it('switches to calendar view when view button is clicked', () => {
    render(<ProtocolInstructions {...mockProps} />);
    fireEvent.click(screen.getByText('View Calendar'));
    expect(screen.getByTestId('calendar-view')).toBeInTheDocument();
  });

  it('switches back to list view when view button is clicked again', () => {
    render(<ProtocolInstructions {...mockProps} />);
    fireEvent.click(screen.getByText('View Calendar'));
    fireEvent.click(screen.getByText('View List'));
    expect(screen.getByTestId('list-view')).toBeInTheDocument();
  });

  it('handles iCalendar download button click', () => {
    render(<ProtocolInstructions {...mockProps} />);
    expect(screen.getByText('iCalendar file (.ics)')).toBeInTheDocument();
  });

  it('passes correct props to ListView', () => {
    const { container } = render(<ProtocolInstructions {...mockProps} />);
    expect(screen.getByTestId('list-view')).toBeInTheDocument();
  });

  it('passes correct props to CalendarView when switched', () => {
    const { container } = render(<ProtocolInstructions {...mockProps} />);
    fireEvent.click(screen.getByText('View Calendar'));
    expect(screen.getByTestId('calendar-view')).toBeInTheDocument();
  });

  it('renders view toggle button with correct text', () => {
    render(<ProtocolInstructions {...mockProps} />);
    expect(screen.getByText('View Calendar')).toBeInTheDocument();
  });

  it('maintains state when switching views multiple times', () => {
    render(<ProtocolInstructions {...mockProps} />);
    fireEvent.click(screen.getByText('View Calendar'));
    expect(screen.getByTestId('calendar-view')).toBeInTheDocument();
    fireEvent.click(screen.getByText('View List'));
    expect(screen.getByTestId('list-view')).toBeInTheDocument();
    fireEvent.click(screen.getByText('View Calendar'));
    expect(screen.getByTestId('calendar-view')).toBeInTheDocument();
  });
});