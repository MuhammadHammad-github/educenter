import React from "react";
import Hero from "../_components/Hero";
import MyButton from "../_components/MyButton";
import MyListItem from "../_components/MyListItem";
const NoticeDetails = () => {
  return (
    <div>
      <Hero path="Notice Details" />{" "}
      <div className="flex xs:flex-row flex-col  items-start respPx20 my-20 gap-5">
        <div className="flex flex-col items-center justify-center p-5 w-full  bg-sunrise">
          <h1 className="text-white text-40px font-semibold">30</h1>
          <p className="text-white">APR,2019</p>
        </div>
        <div>
          <h1 className=" text-3xl font-bold transitional  cursor-pointer">
            Teaching Materials and Testing Methods
          </h1>
          <p className="text-[15px] leading-[1.9] my-5">
            Lorem ipsum dolor sit amet, lectus molestie amet eget varius nulla
            ultricies, senectus vehicula wisi risus tellus nonummy. Urna
            volutpat, nunc doloremque risus felis lorem risus. Et suspendisse
            diam libero pulvinar, tristique ac cras luctus ornare. Quam justo.
            Non ligula turpis sem, velit dolor luctus venenatis. Eros eget at
            vitae, wisi diam ut ad convallis, in gravida nunc inceptos sed leo
            donec, duis dolorem adipiscing arcu facilisis. Purus lorem vulputate
            et condimentum in felis, porttitor accumsan id bibendum diam varius,
            lorem diam molestie erat a amet urna, dolor pellentesque lectus
            justo adipiscing. Laoreet est velit vestibulum, laoreet luctus
            bibendum sed ornare amet elementum, ullamcorper nibh in sollicitudin
            donec arcu lorem.
            <br />
            <br />
            Quam justo. Non ligula turpis sem, velit dolor luctus venenatis.
            Eros eget at vitae, wisi diam ut ad convallis, in gravida nunc
            inceptos sed leo donec, duis dolorem adipiscing arcu facilisis.
            Purus lorem vulputate et condimentum in felis, porttitor accumsan id
            bibendum diam varius, lorem diam molestie erat a amet urna, dolor
            pellentesque lectus justo adipiscing. Laoreet est velit vestibulum,
            laoreet luctus bibendum sed ornare amet elementum, ullamcorper nibh
            in sollicitudin donec arcu lorem.
          </p>
          <ul className=" ">
            <MyListItem text={"Digital Access to Scholarship at Smart"} />
            <MyListItem text={"Institutes"} />
            <MyListItem text={"Smart-affiliated hospitals and research"} />
            <MyListItem text={"Smart Catalyst"} />
            <MyListItem text={"Smart Library Portal"} />
            <MyListItem
              text={"Smart research programs and departments Subscribe"}
            />
          </ul>
          <div className="my-10">
            <MyButton text={"Download"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetails;
