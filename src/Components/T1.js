import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

return <div {...other}>{value === index && <Box p={3}>{children}</Box>}</div>;
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
          <LinkTab label="Gallery" href="C:\Users\dinesh.dhumak\Documents\GitHub\SarovarDesign\src\Pages\Gallery.js" />
          <LinkTab label="Page Two" href="/bar" />
          <LinkTab label="Page Three" href="/baz" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      Gallery
      </TabPanel>
      <TabPanel value={value} index={1}>
        Page Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Page Three
      </TabPanel>
    </div>
  );
}