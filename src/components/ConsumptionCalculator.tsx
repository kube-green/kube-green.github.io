import React from 'react';
import Decimal from 'decimal.js-light';

import clsx from 'clsx';
import styles from './ConsumptionCalculator.module.css';

export default function ConsumptionCalculator() {
  const [co2PerPod, setCO2PerPod] = React.useState(new Decimal(11));
  const [numberOfPodsTotal, setNumberOfPods] = React.useState(new Decimal(100));
  const [numberOfPodsSleeped, setNumberOfSleepedPods] = React.useState(new Decimal(100));
  const [numberOfHourSleepInWeek, setNumberOfHourSleepInWeek] = React.useState(new Decimal(128));

  const resultWithKubeGreen = React.useMemo(
    () => calculateCO2WeekConsumption(
      co2PerPod,
      numberOfPodsTotal,
      numberOfPodsSleeped,
      numberOfHourSleepInWeek,
    ),
    [co2PerPod, numberOfPodsTotal, numberOfPodsSleeped, numberOfHourSleepInWeek],
  );
  const resultWithoutKubeGreen = React.useMemo(
    () => calculateCO2WeekConsumption(
      co2PerPod,
      numberOfPodsTotal,
      numberOfPodsSleeped,
      new Decimal(0),
    ),
    [co2PerPod, numberOfPodsTotal, numberOfPodsSleeped],
  );

  return (
    <div className={clsx(styles.card, 'card')}>
      <div className="card__header">
        <h2>CO2 Calculator</h2>
      </div>
      <div className="card__body">
        <div className={styles.cardBody}>
          <CalcInput
            label="CO2 per pods per year (kg CO2eq)"
            onInputChange={setCO2PerPod}
            value={co2PerPod}
          />
          <CalcInput
            label="Total number of pods"
            onInputChange={setNumberOfPods}
            value={numberOfPodsTotal}
          />
          <CalcInput
            label="Total pods when kube-green active"
            onInputChange={setNumberOfSleepedPods}
            value={numberOfPodsSleeped}
          />
          <CalcInput
            label="Hour of sleep per week"
            onInputChange={setNumberOfHourSleepInWeek}
            value={numberOfHourSleepInWeek}
          />
        </div>
        <h3>
          Results
          <div className={styles.subTitle}>Total (Kg CO2eq/week)</div>
        </h3>
        <div>
          <div>
            without kube-green:
            {' '}
            {resultWithoutKubeGreen.toString()}
          </div>
          <div>
            <b>
              with kube-green:
              {' '}
              {resultWithKubeGreen.toString()}
            </b>
          </div>
          <div>
            <b>
              Difference:
              {' '}
              {resultWithKubeGreen.minus(resultWithoutKubeGreen).toString()}
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}

const HOUR_IN_WEEK = new Decimal(7).mul(new Decimal(24));
function calculateCO2WeekConsumption(
  co2PerPod: Decimal,
  totalNumberOfPods: Decimal,
  numberOfPodsSleeped: Decimal,
  sleepHour: Decimal,
): Decimal {
  const co2PerDayPerPod = co2PerPod.dividedBy(365).dividedBy(24);
  const co2WithKubeGreen = co2PerDayPerPod
    .mul(totalNumberOfPods.minus(numberOfPodsSleeped))
    .mul(sleepHour);
  const co2WithoutKubeGreen = co2PerDayPerPod
    .mul(totalNumberOfPods)
    .mul(HOUR_IN_WEEK.minus(sleepHour));
  return co2WithKubeGreen.plus(co2WithoutKubeGreen).toDecimalPlaces(0);
}

interface InputCalculator {
  label: string;
  value: Decimal;
  onInputChange: (value: Decimal) => void;
}
function CalcInput({ label, value, onInputChange }: InputCalculator) {
  return (
    <div className={styles.inputWrapper}>
      <div>
        {label}
      </div>
      <div>
        <input
          className={styles.inputCalc}
          onChange={(e) => onInputChange(new Decimal(e.target.value || 0))}
          type="number"
          value={value.toString()}
        />
      </div>
    </div>
  );
}
