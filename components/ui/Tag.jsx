export default function Tag({ fill, children }) {
  return (
    <>
      {fill ? (
        <p className="bg-grey-200 text-lg leading-none tracking-tight text-grey-100 font-normal w-fit px-2.5 py-0.6 rounded-md">
          {children}
        </p>
      ) : (
        <p className="text-lg leading-none tracking-tight text-grey-100 font-normal">
          {children}
        </p>
      )}
    </>
  );
}
