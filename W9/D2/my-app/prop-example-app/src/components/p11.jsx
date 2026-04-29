import PropTypes from 'prop-types';
// Prop validation
function Profile({name,age}) {
    return(
        <div className="card"> 
            <p>{name}</p>
            <p>{age}</p>
        </div>
    );
}
Profile.PropTypes = {
    name: PropTypes.string.isRequired,
    name: PropTypes.number.isRequired,
};
export function PropTypesDemo() {
    return(
        <>
            <Profile name="Rakshitha" age={22} />
        </>
    );
}