import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPlannings } from "../componentsDash/redux/planning/planningActions";
import Header from "./Header";
import Typical from "react-typical";

const Planning = () => {
  const planningData = useSelector((state) => state.planning);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPlannings());
  }, []);

  const planning_container = planningData.plannings
    .reverse()
    .map((planning) => (
      <tr>
        <td className="tabt" style={{ color: "white" }}>
          {planning.Date}
        </td>
        <td className="tabt" style={{ color: "white" }}>
          {planning.titre}
        </td>
        <td className="tabt" style={{ color: "white" }}>
          {planning.description}
        </td>
        <br></br>
        <br></br>
        <br></br>
      </tr>
    ));

  return (
    <div>
      <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="preloader-circle" />
            <div className="preloader-img pere-text">
              <img src="assets/img/logo/11icon.png" alt="club, didon, carthage, histoire, patrimoine, visite, association, sauvegarde, restauration" />
            </div>
          </div>
        </div>
      </div>
      <Header />
      <main>
        <div className="slider-area1212 ">
          <div className="slider-height2 hero-overly2 d-flex align-items-center">
            <div className="">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap hero-cap2 text-right">
                    <h2>
                      Bienvenue à
                      <Typical
                        loop={Infinity}
                        wrapper="a"
                        steps={[
                          " Programmes",
                          1000,
                          "  Club didon de Carthage",
                          1000,
                        ]}
                      />
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="planning" className="about-details pt-150 mb-3 bodyBg">
          <div className="container">
            <div className="row">
              <div className="offset-xl-1 col-lg-8">
                <div className="about-details-cap">
                  <h4>Programme Annuel</h4>
                </div>
              </div>
            </div>
          </div>
          <div id="Web_1366__1" className="Web_1366__1_Class">
            <img
              className="ID4_Class"
              src="assets/img/planning/bg.png"
              alt="club, didon, carthage, histoire, patrimoine, visite, association, sauvegarde, restauration"
            />
            <svg className="Path_1_i" viewBox="0 0 572 562.812"></svg>
            <table className="tab" style={{ width: "55%" }}>
              <thead>
                <tr>
                  <th scope="col tabt" style={{ color: "white" }}></th>
                  <th scope="col" style={{ color: "white" }}></th>
                  <th scope="col" style={{ color: "white" }}></th>
                </tr>
              </thead>
              <tbody>{planning_container}</tbody>
            </table>
            <div className="Planning__Class">
              <span>Programme</span>
              <br />
            </div>
            <svg className="Line_4" viewBox="0 0 5 361">
              <path className="Line_4_Class" d="M 0 0 L 5 361"></path>
            </svg>
            <svg className="Line_5" viewBox="0 0 4 196">
              <path className="Line_5_Class" d="M 0 0 L 0 196"></path>
            </svg>
            <img
              className="ktiba_Class"
              src="assets/img/planning/ktiba.png"
              alt="club, didon, carthage, histoire, patrimoine, visite, association, sauvegarde, restauration"
            />
          </div>{" "}
        </div>
      </main>
      <div id="back-top">
        <a title="Go to Top" href="#">
          <i className="fas fa-level-up-alt" />
        </a>
      </div>
    </div>
  );
};

export default Planning;
