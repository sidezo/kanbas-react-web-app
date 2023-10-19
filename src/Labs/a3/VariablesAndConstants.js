function VariablesAndConstants() {
  var functionScoped = 2; //dont use anymore
  let blockScoped = 5; //can change overtime
  const constant1 = functionScoped - blockScoped; //can't change overtime
  return (
    <div>
      <h2>Variables and Constants</h2>
      functionScoped = {functionScoped}
      <br />
      blockScoped = {blockScoped}
      <br />
      constant1 = {constant1}
      <br />
    </div>
  );
}
export default VariablesAndConstants;
