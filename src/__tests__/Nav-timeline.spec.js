import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import NavTimeline from "../components/Nav-timeline";

describe("<NavTimeline />", () => {
  let getByTestId;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((init) =>[init, setState]);

  afterEach(cleanup);

  describe("clicking the year button", () => {
    let sendHandler;
    beforeEach( () => {
      sendHandler = jest.fn().mockName("sendHandler");
        ({ getByTestId } = render(<NavTimeline onSend={sendHandler} />));
        
      fireEvent.click(getByTestId("sendButton-1898"));
    });

    
  });
});