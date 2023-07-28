/* eslint-disable react/prop-types */

const ExperienceCardIcon = ({ experience }) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <img
        src={experience.icon}
        alt={experience.company_name}
        className="w-[60%] h-[60%] object-contain"
      />
    </div>
  );
};

export default ExperienceCardIcon;
