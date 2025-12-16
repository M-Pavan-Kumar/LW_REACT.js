function Child(data) {
  return (
    <>
      {console.log(data)}
      <h3>Below data is from parent component</h3>
      {/* <h4>Name : {data.name}</h4>
      <h4>Age : {data.age}</h4> */}
      <h4>Name : {data.student.name}</h4>
      <h4>Age : {data.student.age}</h4>
    </>
  );
}
export default Child;
