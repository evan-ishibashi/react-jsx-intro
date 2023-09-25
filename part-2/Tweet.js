function Tweet({ username, name, date, message}) {
  return (<p>
    <h2>{name}</h2><br />
    @{username}<br />
    <b>{message}</b><br />
    {date}
    </p>)
}