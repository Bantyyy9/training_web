const User = ({ firstName, lastName, picture }) => {
  return (
    <div className="flex gap-2">
      <div>
        <img
          className="h-10 w-10 rounded-md"
          src={picture}
          alt={`${firstName} ${lastName}'s picture`}
        />
      </div>

      <div className="-mt-1">
        <h3 className="text-lg">{firstName}</h3>
        <p className="text-[10px]">{lastName}</p>
      </div>
    </div>
  );
};

export default User;
