import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Research Abstract</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/research.png" />
      </Head>
      <main className={styles.main_div}>
        <div className={styles.header_div}>
          <h1>
            COMPARISON OF THE TRADITIONAL AND PLYOMETRIC TYPE CORE TRAINING
            EFFECT FOR THE UPPER BODY POWER OUTPUT OF AMATURE BOXING PLAYERS
          </h1>
          <h4>K. D. M. Lakshitha , Dr. M. A. S. Udayanga</h4>
          <p>
            Department of Sport Science, Faculty of Applied Sciences, University
            of Sri Jayewardenepura, Sri Lanka
          </p>
          <a href="mailto:manullakshith12@gmail.com">
            manullakshith12@gmail.com
          </a>
        </div>
        <div className={styles.abstract_div}>
          <h2>ABSTRACT</h2>
          <p>
            Upper body power plays a crucial role in boxing, as it directly
            contributes to the ability to generate force and speed in punches,
            enhance punching power, and effectively counter an opponent's
            attacks. This study aimed to identify the relationship between core
            strength and upper body power and evaluate the effects of
            traditional and plyometric-type core training on amateur boxing
            players. Fourteen (N=14) participants (Age = 23.545 ± 3.236, Body
            weight = 68.536 ± 13.373, Height = 167.409 ± 7) were randomly
            assigned to either the traditional core training (TC) or
            plyometrictype core training (PC) group. Pre-test measurements
            assessed core strength using the Hip thrust (HT) one repetition
            maximum (1RM) test and plank test, while upper body power was
            measured through the explosive Bench press (BP) and Medicine ball
            throw tests. Following one month of core training sessions, a
            post-test evaluation was conducted to assess any changes in core
            strength and upper body power. The results revealed significant
            correlations between HT 1RM and BP power (r = 0.543, p = 0.009), HT
            1RM and Medicine ball throw (r = 0.048, p = 0.018), indicating a
            moderate and small association between core strength and upper body
            power respectively. However, a small but insignificant association
            existed between core strength measured by the plank test and BP
            power (r = 0.082, p = 0.718). Additionally, a significantly strong
            correlation was found between HT 1RM and BP rate of force
            development (r = 0.707, p &lt; 0.05), suggesting that higher core
            strength leads to faster force generation during the BP, PC group
            showed noticeable gained upper body performance than the TC group
            (BP max force - PC = 18.094 ± (-49.38), TC = 3.6258±35.42) (Medicine
            ball throw - PC = 0.5583 ± 0.43, TC = 0.06 ± 0.26). In conclusion,
            there exists a positive relationship between core strength and upper
            body power. Furthermore, the implementation of plyometric core
            training has been found to have a greater impact on improving upper
            body power compared to traditional core training methods. Therefore,
            incorporating plyometric core training can be highly beneficial for
            enhancing upper body power instead of relying solely on traditional
            training methods. This finding offers valuable insights for coaches,
            trainers, and athletes seeking to optimize training methods to
            maximize upper body power and performance.
          </p>
        </div>
      </main>
    </>
  );
}
