import React from "react";
import Hero from "./components/Hero";
import InfoBoxes from "./components/InfoBoxes";

import { Cards } from "@/components/Card/Card";
import Landing from "./components/Landing/Landing";
import Block1 from "./components/Block1/Block1";
import Calendar from "./components/Calendar/Calendar";
import CarouselComponent from "./components/Slide/CarouselComponent";
import TableComponent from "./components/Table/TableComponent";

import LeagueForm from "./components/FormComponent/FormComponent";
import LoginFormComponent from "./components/LoginFormComponent/LoginFormComponent";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Block2 from "./components/Block2/Block2";
import Block3 from "./components/Block3/Block3";
import Block4 from "./components/Block4/Block4";
import { homepageInfo } from "./homepagecontent";
import Banner from "./components/Banner/Banner";
import { SideMenu } from "./components/SideMenu/SideMenu";

const HomePage = () => {
  return (
    <div>
      <Landing />
      <Cards />
      <CarouselComponent />
      <Block1 />
      {/* <Calendar /> */}
      {/* <TableComponent />
      <LeagueForm />
      <LoginFormComponent />
      <RegisterForm /> */}
      <Block2 data={homepageInfo} />
      <Banner />

      {/* <Block4 /> */}

      {/* <Block3 /> */}

      {/* <DataTableDemo /> */}
      {/* <FeaturedProperties />
      <HomeProperties /> */}
    </div>
  );
};

export default HomePage;
