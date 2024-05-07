import { useDispatch } from 'react-redux';
import './App.css';
import { CounterBox } from './components/CounterBox';
import { ParamBox } from './components/ParamsBox';
import { setStartValuesAC } from './store/reducers/paramsReducer';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppRootReducer, StateParamsType } from './store/store';


function App() {
  const stateParamsValues = useSelector<AppRootReducer, StateParamsType>(state => state.params)

  const [startValue, setStartValue] = useState(stateParamsValues.startValue)
  const [maxValue, setMaxValue] = useState(stateParamsValues.maxValue)

  const dispatch = useDispatch()

  const setParamsValues = (start: number, max: number, disabled: boolean) => {
    if (start < max && start >= 0 && max > 0) {
      dispatch(setStartValuesAC(start, max, disabled))
    }
  }
  return (
    <>
      dd
      <ParamBox setValues={setParamsValues} stateParamsValues={stateParamsValues}
        startValue={startValue} maxValue={maxValue}
        setStartValue={(v) => setStartValue(v)} setMaxValue={(v) => setMaxValue(v)} />
      <CounterBox />
    </>
  );
}

export default App;
