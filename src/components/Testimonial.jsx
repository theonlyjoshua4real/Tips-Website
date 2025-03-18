import {
    Card,
    CardBody,
    Typography,
    CardHeader,
  } from "@material-tailwind/react";
  
  function TestimonialCard({ img, client, title, clientInfo }) {
    return (
      <Card shadow={false} className="bg-gray-100/50 rounded-2xl p-6">
        <CardHeader color="transparent" floated={false} shadow={false}>
          <Typography
            color="blue-gray"
            className="lg:mb-20 mb-4 text-2xl font-bold"
          >
            &quot;{title}&quot;
          </Typography>
        </CardHeader>
        <CardBody className="px-4 py-0 flex flex-wrap-reverse gap-x-6 justify-between items-center">
          <div>
            <Typography variant="h6" color="blue-gray">
              {client}
            </Typography>
            <Typography
              variant="paragraph"
              className="font-normal !text-gray-500"
            >
              {clientInfo}
            </Typography>
          </div>
          {/* <img src={img} className="max-w-[8rem]" alt={client} /> */}
        </CardBody>
      </Card>
    );
  }
  
  const testimonials = [
    {
      title: "Their tips have drastically improved my betting strategy! I've been winning more consistently than ever before.",
      client: "John Spencer",
      clientInfo: "Casual Sports Bettor",
      img: "https://via.placeholder.com/150/000000/FFFFFF?text=John+S", // Replace with actual image
    },
    {
      title: "Joining this community has been a game changer! The exclusive tips and strategies are absolutely worth it.",
      client: "Sara Patel",
      clientInfo: "Member since 2022",
      img: "https://via.placeholder.com/150/000000/FFFFFF?text=Sara+P", // Replace with actual image
    },
    {
      title: "Their expert analysis saved me time and frustration. I trust their insights for every major game.",
      client: "Michael Reed",
      clientInfo: "Sports Analyst",
      img: "https://via.placeholder.com/150/000000/FFFFFF?text=Michael+R", // Replace with actual image
    },
  ];
  
  export function TestimonialSection16() {
    return (
      <section className="px-8 py-10 lg:py-28">
        <div className="container mx-auto">
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-4 !text-2xl lg:!text-4xl"
          >
            What our members are saying 
          </Typography>
          <Typography
            variant="lead"
            className="max-w-3xl !text-gray-500 mb-10 lg:mb-20"
          >
            Real success stories from our passionate community of bettors who have unlocked consistent wins and smarter strategies through our expert tips and insights.
          </Typography>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
            {testimonials.map((props, key) => (
              <TestimonialCard key={key} {...props} />
            ))}
          </div>
  
          
        </div>
      </section>
    );
  }
  
  export default TestimonialSection16;