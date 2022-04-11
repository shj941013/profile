import PortfolioList from "../portfolioList/PortfolioList"
import "./projects.scss"
import { useEffect, useState } from "react";
import {
  webPortfolio,
  mobilePortfolio
} from "../../data";

export default function Projects() {
  const [selected, setSelected] = useState("web");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    }
  ];

  useEffect(() => {
    switch (selected) {
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      default:
        setData(webPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
        <h1>Projects</h1>
        <ul>
          {list.map((item) => (
            <PortfolioList
             title={item.title}
             active={selected === item.id}
             setSelected={setSelected}
             id={item.id}
            />
          ))}
        </ul>
        <div className="container">
          {data.map((d) => (
            <div className="item">
              <img
                src={d.img}
                alt=""/>
              <h3>{d.title}</h3>
            </div>
          ))}
        </div>
    </div>
  );
}
