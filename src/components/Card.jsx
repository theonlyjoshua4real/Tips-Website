import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  function CheckIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-3 w-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    );
  }
   
  export default function PricingCard({
    title,
    price,
    period,
    features,
    buttonText,
  }) {
    return (
      <Card
        variant="gradient"
        className="w-full p-8 bg-transparent border-customYellow border-2 relative"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
        >
          <Typography variant="small" color="white" className="font-normal uppercase">
            {title}
          </Typography>
          <Typography variant="h1" color="white" className="mt-6 flex justify-center gap-1 text-2xl font-normal font-montserrat">
            <span className="text-2xl">$</span>
            {price}
            <span className="self-end text-2xl ">/ {period}</span>
          </Typography>
        </CardHeader>
        <CardBody className="p-0 text-customYellow">
          <ul className="flex flex-col gap-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal font-montserrat">{feature}</Typography>
              </li>
            ))}
          </ul>
        </CardBody>
        <CardFooter className="mt-12 p-0">
          <Button
            size="lg"
            color="white"
            variant="outlined"
            className="w-4/5 hover:scale-[1.02] focus:scale-[1.02] active:scale-100 hover:bg-customYellow hover:text-black absolute bottom-4 left-1/2 transform -translate-x-1/2"
            ripple={false}
            fullWidth={true}
          >
            {buttonText}
          </Button>
        </CardFooter>
      </Card>
    );
  }