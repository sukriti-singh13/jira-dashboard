const BADGE_COLOR_MAP = {
  Bug: '#f44336',
  Task: '#3a86ff',
};

const Badge = ({ type }: { type: 'Bug' | 'Task' }) => {
  return (
    <div
      className='bg-yellow-500 rounded-full font-normal  text-xs grid place-content-center px-3 py-[2px] text-white
      border border-solid 
      '
      style={{
        backgroundColor: `${BADGE_COLOR_MAP[type]}50`,
        borderColor: BADGE_COLOR_MAP[type],
        color: BADGE_COLOR_MAP[type],
      }}
    >
      {type}
    </div>
  );
};

export default Badge;
