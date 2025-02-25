import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
  }

  export default function AccordionCustomItem({id, open, handleOpen, header, body}) {
    return (
        <Accordion open={open === id} icon={<Icon id={id} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(id)}>{header}</AccordionHeader>
          <AccordionBody>{body}</AccordionBody>
        </Accordion>
    );

  }