import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CalendarView from './CalendarView';

jest.mock('@fullcalendar/react', () => {
  return function MockFullCalendar({ events, headerToolbar }) {
    return (
      <div data-testid="calendar">
        <div data-testid="calendar-header">
          <button>{headerToolbar.left}</button>
          <span>{headerToolbar.center}</span>
          <button>{headerToolbar.right}</button>
        </div>
        {[...events].reverse().map((event, index) => (
          <div key={index} data-testid="calendar-event">
            {event.title} - {event.start}
          </div>
        ))}
      </div>
    );
  };
});

describe('CalendarView Component', () => {
  const mockProps = {
    ListOfCalendarInstruction: [
      {
        OnDay: 0,
        step1: 'Inject 2cc Cystorelin (GnRH)',
        step2: '<<ai_after_standing_heat>>',
        step3: 'Apply CIDR device'
      },
      {
        OnDay: 7,
        step1: 'Remove CIDR',
        step2: '<<cidr_device>>',
        step3: '5cc Lutalyse (PG)'
      }
    ],
    DateToStartBreeding: new Date('2024-03-20T02:00:00'),
    SynchronizationProtocol: 1,
    SemenType: 'Conventional'
  };

  const mockPropsWithSexed = {
    ...mockProps,
    SemenType: 'Conventional & Sexed',
    ListOfCalendarInstruction: [
      {
        OnDay: 0,
        step1: 'Inject 2cc Cystorelin (GnRH)',
        step2: 'Breed females AI 16-22 hours after standing heat.',
        step3: 'Apply CIDR device'
      },
      {
        OnDay: 7,
        step1: 'Remove CIDR',
        step2: 'Remove the CIDR device and apply estrus detection aid for each female.',
        step3: '5cc Lutalyse (PG)'
      }
    ]
  };

  it('renders calendar with protocol number', () => {
    render(<CalendarView {...mockProps} />);
    expect(screen.getByText('Protocol #1')).toBeInTheDocument();
    expect(screen.getByTestId('calendar')).toBeInTheDocument();
  });

  it('renders calendar header with navigation', () => {
    render(<CalendarView {...mockProps} />);
    const header = screen.getByTestId('calendar-header');
    expect(header).toBeInTheDocument();
    expect(screen.getByText('prev')).toBeInTheDocument();
    expect(screen.getByText('next')).toBeInTheDocument();
  });

  it('renders events with conventional semen type', () => {
    render(<CalendarView {...mockProps} />);
    const events = screen.getAllByTestId('calendar-event');
    expect(events.length).toBeGreaterThan(0);
    const eventText = events.map(e => e.textContent).join(' ');
    expect(eventText).toContain('Breed females AI 10-14 hours after standing heat');
  });

  it('renders events with sexed semen type', () => {
    render(<CalendarView {...mockPropsWithSexed} />);
    const events = screen.getAllByTestId('calendar-event');
    expect(events.length).toBeGreaterThan(0);
    const eventText = events.map(e => e.textContent).join(' ');
    expect(eventText).toContain('Breed females AI 16-22 hours after standing heat');
  });

  it('handles print button click', () => {
    const mockPrint = jest.spyOn(window, 'print').mockImplementation(() => {});
    render(<CalendarView {...mockProps} />);
    fireEvent.click(screen.getByText('Print'));
    expect(mockPrint).toHaveBeenCalled();
    mockPrint.mockRestore();
  });

  it('formats dates correctly in calendar events', () => {
    render(<CalendarView {...mockProps} />);
    const events = screen.getAllByTestId('calendar-event');
    const eventDates = events.map(e => e.textContent);
    expect(eventDates[0]).toMatch(/2024-03-20/);
    expect(eventDates[eventDates.length - 1]).toMatch(/2024-03-27/);
  });

  it('handles CIDR device text based on semen type', () => {
    render(<CalendarView {...mockProps} />);
    const events = screen.getAllByTestId('calendar-event');
    const eventText = events.map(e => e.textContent).join(' ');
    expect(eventText).toContain('Remove the CIDR device from each female');
  });

  it('handles CIDR device text with sexed semen', () => {
    render(<CalendarView {...mockPropsWithSexed} />);
    const events = screen.getAllByTestId('calendar-event');
    const eventText = events.map(e => e.textContent).join(' ');
    expect(eventText).toContain('Remove the CIDR device and apply estrus detection aid for each female');
  });

  it('handles MGA time changes correctly', () => {
    const propsWithMGA = {
      ...mockProps,
      ListOfCalendarInstruction: [
        {
          OnDay: 0,
          step1: '<<mga_time_change>>',
          step2: '<<mga_time_change_2>>',
          step3: '<<mga_time_change_3>>'
        }
      ]
    };
    render(<CalendarView {...propsWithMGA} />);
    const events = screen.getAllByTestId('calendar-event');
    const eventText = events.map(e => e.textContent).join(' ');
    expect(eventText).toContain('Continue feeding until');
  });

  it('handles current time placeholder', () => {
    const propsWithTime = {
      ...mockProps,
      ListOfCalendarInstruction: [
        {
          OnDay: 0,
          step1: '<<current_time>>'
        }
      ]
    };
    render(<CalendarView {...propsWithTime} />);
    const events = screen.getAllByTestId('calendar-event');
    const eventText = events.map(e => e.textContent).join(' ');
    expect(eventText).toMatch(/\d{1,2}:\d{2}/);
  });
});