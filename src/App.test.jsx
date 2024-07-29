import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from "@testing-library/user-event";
import App from './App';

test('renders both Gig components with their Buttons', () => {
  render(<App />);



  // Test for the first Gig
  expect(screen.getByText("Catfish and the Bottlemen")).toBeInTheDocument();
  expect(screen.getByText("Join CATB on their next tour of the UK!")).toBeInTheDocument();
  expect(screen.getByText("7pm on 12/08/24")).toBeInTheDocument();
  expect(screen.getByText("Alexandra Palace - Doors open 6pm")).toBeInTheDocument();
  expect(screen.getAllByText("Get Tickets Here!")[0]).toBeInTheDocument();

  // Test for the second Gig
  expect(screen.getByText("Kings of Leon")).toBeInTheDocument();
  expect(screen.getByText("Back for another headline at BST!")).toBeInTheDocument();
  expect(screen.getByText("8pm on 14/08/24")).toBeInTheDocument();
  expect(screen.getByText("Hyde Park - Entry from 3pm")).toBeInTheDocument();
  expect(screen.getAllByText("Get Tickets Here!")[1]).toBeInTheDocument();

  // Test for the third Gig
  expect(screen.getByText("Alabama Shakes")).toBeInTheDocument();
  expect(screen.getByText("Grammy-winning soul and blues rock band from Limestone County")).toBeInTheDocument();
  expect(screen.getByText("6pm on 4/09/24")).toBeInTheDocument();
  expect(screen.getByText("The O2 (Greenwich) - Entry from 5pm")).toBeInTheDocument();
  expect(screen.getAllByText("Get Tickets Here!")[2]).toBeInTheDocument();
});




test('renders the Counter component and increments the counter', () => {
  render(<App />);

  // No clicks yet
  expect(screen.getByText('Counter:')).toBeInTheDocument();
  expect(screen.getByText('0')).toBeInTheDocument();

});

test("renders with a new value of 2 ", async () => {
  
  render(<App />);

  // When clicking the button 3 times
  await userEvent.click(screen.getByText("Increment the counter"));
  await userEvent.click(screen.getByText("Increment the counter"));
  await userEvent.click(screen.getByText("Increment the counter"));

  
  expect(screen.getByText("3")).toBeInTheDocument();
});

test("renders with a new value of -3 ", async () => {
  
  render(<App />);

  // When clicking the button 3 times
  await userEvent.click(screen.getByText("Decrement the counter"));
  await userEvent.click(screen.getByText("Decrement the counter"));
  await userEvent.click(screen.getByText("Decrement the counter"));

  
  expect(screen.getByText('-3')).toBeInTheDocument();
});
  