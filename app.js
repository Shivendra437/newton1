
  const handleClick=(event)=>{
    console.log("button id is"+event.target.id);
  }

  return (
    <div id="main">
    <button onClick={handleClick} id="button-a">Button A</button>
    <button onClick={handleClickTwo} id="button-b">Button B </button>
</div>
  )
}
