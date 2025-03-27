import { useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import NavBar from "./components/Navbar/NavBar.jsx";
import MailBoxList from "./components/MailboxList/MailboxList.jsx";
import MailboxForm from "./components/MailboxForm/MailboxForm.jsx";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails.jsx";

// src/App.jsx

const App = () => {
  const [mailBoxes, setMailBoxes] = useState([]);

  const addBox = (mailBoxData) => {
    mailBoxData._id = mailBoxes.length + 1;
    setMailBoxes([...mailBoxes, mailBoxData]);
  };

  return (
    <>
      <NavBar />
      <h1>Mailbox List</h1>;
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />
        <Route path="/mailboxes" element={<MailboxList />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails />} />
      </Routes>
    </>
  );
};

export default App;
