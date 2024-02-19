export const SearchBox = ({ filter, handleFilterContacts }) => {
  return (
    <input type="text" placeholder="Search..." value={filter} onChange={handleFilterContacts} />
  );
};
