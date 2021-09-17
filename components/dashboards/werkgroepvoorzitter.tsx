import Calendar from '../calendar';

export default function WerkgroepvoorzitterDashboard() {
	function handleSubmit() {
		alert(1);
	}
	return (
		<div>
			<form>
				<Calendar updateSelectedHours={() => { }} />
				<button onClick={handleSubmit}>Vraag aan</button>
			</form>
		</div>
	);
}
