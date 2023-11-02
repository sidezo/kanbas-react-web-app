import ClickEvent from './ClickEvent';
import PassingDataOnEvent from './PassingDataOnEvent';
import Add from './Add';  // Add.js
import PassingFunctions from './PassingFunctions';
import EventObject from './EventObject';
import Counter from './Counter';
import BooleanStateVariables from './BooleanStateVariables';
import StringStateVariables from './StringStateVariables';
import DateStateVariable from './DateStateVariable';
import ObjectStateVariable from './ObjectStateVariable';
import ArrayStateVariable from './ArrayStateVariable';
import ParentStateComponent from './ParentStateComponent';
import ReduxExamples from './ReduxExamples';


function Assignment4() {
    function sayHello() {
      alert("Hello");
    }

  return (
    <div>
      <h1>Assignment 4</h1>
      <ReduxExamples />
      <ParentStateComponent />
      <ArrayStateVariable />
      <ObjectStateVariable />
      <DateStateVariable />
      <StringStateVariables />
      <BooleanStateVariables />
      <Counter />
      <EventObject />
      <PassingFunctions theFunction={sayHello} />
      <PassingDataOnEvent />
      <Add a={1} b={2} />
      <ClickEvent />
    </div>
  );
}

export default Assignment4;
