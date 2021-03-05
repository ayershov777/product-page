export default function ButtonGroup({ option }) {
  return (
    <div className="row my-3">
      <h2 className="col-3 pr-0 h4">{option.name}</h2>
      <div className="col-9 pl-0" name={option.name}>
        {option.values.map((value) => (
          <button className="btn btn-primary m-1" value={value.value}>{value.value}</button>
        ))}
      </div>
    </div>
  )
}
