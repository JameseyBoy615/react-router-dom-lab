const MailboxForm = (props) => {
  return (
    <main>
      <h2>New MailBox</h2>
      <form action="">
        <label htmlFor="boxHolder">Enter a Boxholder:</label>
        <input type="text" id="boxHolder" name="boxHolder" />
        <label htmlFor="boxSize">Select a Box Size:</label>
        <select name="boxSize" id="boxSize">
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </form>
    </main>
  );
};

export default MailboxForm;
