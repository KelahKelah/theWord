import React from "react";
import { useHistory } from "react-router-dom";
import { img1, img2, img3, bannerImg } from "../../assets/images";
import { Ask } from "../../assets/svgs";
import { BlogCard, Button, Pagination } from "../../components";
import "./home.css";

const Home = () => {
  const history = useHistory()
  const blogData = [
    {
      id: 1,
      header: "Why God had special Love for David",
      paragraph:"Do you know that when we love ourselves more than we love other people.",
      eyeCount: "165",
      readTime: "20",
      blogImage: `${img1}`,
    },
    {
      id: 2,
      header: "5 Bible Verses for metal health",
      paragraph:"Starting something you haven’t done before, but always wanted to do? ",
      eyeCount: "16",
      readTime: "3",
      blogImage: `${img2}`,
    },
    {
      id: 3,
      header: "Yes you have been set free by the Blood!",
      paragraph: "Do you like what you have? Don't have? Whatever the answer, just ",
      eyeCount: "125",
      readTime: "10",
      blogImage: `${img3}`,
    },
    {
      id: 4,
      header: "When the yoke is called up ",
      paragraph:"You are not fit for the Kingdom ",
      eyeCount: "16",
      readTime: "3",
      blogImage: `${img2}`,
    },
  ];
    return(
      <> 
        <section>
          <div className="banner-img-wrapper">
            <img className="banner-img" src={bannerImg} alt="banner image" />
          </div>
          <div className="h-button-wrapper">
            <Button 
              className="h-button"
              buttonName="Start Writing"
              icon={Ask} 
              onClick={ ()=> history.push('/write') }
            />
          </div>
        </section>

        <section className="h-container">
          <div className="h-row">
                {blogData.length > 0 && blogData.map((item, index) => {
                    return(
                        <BlogCard key={index} item={item} />
                    )
                })
                }
          </div> 
          <div className="h-pagination-wrapper">
            <Pagination />
          </div>
        </section>
      </>
    )
}
export { Home };
