export function HangmanDrawing() {

	return (
		<div style={{ position: "relative" }}>

			{/* top hook */}
			<div style={{ height: "50px", width:"10px", background:"black", position:"absolute", top: 0, right: 0 }} />
			{/* top horizontal bar */}			
			<div style={{ height: "10px", width:"200px", background:"black", marginLeft:"120px" }} />
			{/* vertical bar */}
			<div style={{ height: "400px", width:"10px", background:"black", marginLeft:"120px" }} />
			{/* bottom bar */}
			<div style={{ height: "10px", width: "250px", background: "black"  }} />
		</div>
	)
}