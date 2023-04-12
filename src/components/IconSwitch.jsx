export default function IconSwitch({ icon, onSwitch }) {
  return (
    <div className="icon-switch">
      <span 
        className="icon-switch-icon material-icons"
        onClick={() => onSwitch()}
      >
        {icon}
      </span>       
    </div>
  );
}