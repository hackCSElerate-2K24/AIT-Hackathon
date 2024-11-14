"use client";
import React, { useEffect } from "react";
import styles from "./dashboard.module.css";
import Grid from "../../components/Grid/Grid";
import Info from "../../components/Info/Info";
import BasicTimeline from "../../components/BasicTimeline/BasicTimeline";
import BusDriverDetails from "../../components/BusDriverDetails/BusDriverDetails";
import SkipMyHouse from "../../components/SkipMyHouse/SkipMyHouse";

function Dashboard() {
  useEffect(() => {
    console.log("Rendering Dashboard without any protected routes");
  }, []);

  return (
    <div>
      {/* Admin Panel */}
      <div className={styles.adminPanel}>
        <Grid />
        <Info />
      </div>

      {/* User Panel */}
      <div className={styles.userPanel}>
        <div className={styles.busTitle}>Bus Details :</div>
        <BasicTimeline />
        <div className={styles.busDriverTitle}>Bus Driver Details :</div>
        <BusDriverDetails />
      </div>

      {/* Student Specific Component */}
      <div className={styles.userPanel}>
        <div className={styles.busTitle}>Bus Details :</div>
        <BasicTimeline />
        <div className={styles.busDriverTitle}>Skip My House:</div>
        <SkipMyHouse />
        <div className={styles.busDriverTitle}>Bus Driver Details :</div>
        <BusDriverDetails />
      </div>
    </div>
  );
}

export default Dashboard;
