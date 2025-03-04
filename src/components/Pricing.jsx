import React from "react";
import {default as Card} from "./Card.jsx"

const Pricing = () => {
  return (
    <section id="pricing" className="bg-black/90 padding dark:bg-white/70">
      <h2 className="heading text-customYellow">Membership</h2>

      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <Card
          title=""
          price="77"
          period="month"
          features={[
            "Get answers to your questions anytime with our round-the-clock support team",
            "Join a thriving community of sports bettors who share tips, discuss strategies",
            "Receive winning sports plays backed by film analysis, extensive research, and ad",
            "Each of our 4 premium moderators uses a third-party bet tracking app to consecutive winning margins",
            "Monthly technical support"
          ]}
          buttonText="Buy Now"
        />

        <Card
          title=""
          price="1500"
          period="lifetime"
          features={[
            "Secured value plays updated instantly to keep you ahead of the game.",
            "24/7 live access to expert mods for advice on any sports picks",
            "In-depth picks from NBA, MLB, NFL, CFB, NHL, E-Sports, and F1",
            "Expert tips on bankroll management to maximize your success",
            "Lifetime technical support"
          ]}
          buttonText="Buy Now"
        />
      </div>
    </section>
  );
};

export default Pricing;
