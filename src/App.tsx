import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { CounterBox } from './components/CounterBox';
import { ParamBox } from './components/ParamsBox';
import { setResultAndDisabled } from './store/reducers/counterReducer';
import { setStartValuesAC } from './store/reducers/paramsReducer';
import { AppRootReducer, StateParamsType } from './store/store';
import { setIncorrectMessageAC } from './store/reducers/counterReducer';
import { Messages } from './store/store';


function App() {
  const stateParamsValues = useSelector<AppRootReducer, StateParamsType>(state => state.params)
  const [startValue, setStartValue] = useState(stateParamsValues.startValue)
  const [maxValue, setMaxValue] = useState(stateParamsValues.maxValue)

  const dispatch = useDispatch()

  const { enterMessage, incorrectMessages } = useSelector<AppRootReducer, Messages>(store => store.counter.messages)


  const setParamsValues = (start: number, max: number, disabled: boolean) => {
    if (start < max && start >= 0 && max > 0) {
      dispatch(setStartValuesAC(start, max, disabled))
      dispatch(setResultAndDisabled(start, false, false))
    } else {
      dispatch(setIncorrectMessageAC(incorrectMessages))
    }
  }

  return (
    <>
      <ParamBox setValues={setParamsValues} disabledSet={stateParamsValues.disabledSet}
        startValue={startValue} maxValue={maxValue}
        incorrectMessages={incorrectMessages}
        enterMessage={enterMessage}
        setStartValue={(v) => setStartValue(v)}
        setMaxValue={(v) => setMaxValue(v)} />
      <CounterBox startValue={startValue} maxValue={maxValue} />
    </>
  );
}

export default App;
