import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Button,
  Card,
  CardContent,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { BarChart } from "@mui/x-charts";
import { onValue, ref } from "firebase/database";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GuestTable from "../components/guest-table";
import { AuthContext } from "../context/auth-context";
import { db } from "../firebase/firebase";
import { Guest } from "../types";

function Profile() {
  const { currentUser, signOut } = useContext(AuthContext);
  const [guests, setGuests] = useState<Guest[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const query = ref(db, "guests");
    return onValue(query, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const newGuestList: Guest[] = [];

        for (let id in data) {
          newGuestList.push({ id, ...data[id] });
        }

        setGuests(newGuestList);
      }
    });
  }, []);
  return (
    // /**
    //  * Extract the currrentUser from the context, if you want to
    //  * get the User info, like the email, display name, etc.
    //  */
    // <div>
    //   <h3>Welcome! {currentUser?.email}</h3>
    //   <p>Sign In Status: {currentUser && "active"}</p>
    //   <button onClick={signOut}>Sign Out</button>
    // </div>

    <Container sx={{ padding: 2, margin: 2 }} maxWidth={false}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DeBI e.V. DurgaPujo 2024
          </Typography>
          <Button
            // variant="contained"
            color="inherit"
            onClick={() => {
              if (currentUser) {
                navigate("/addguest");
              }
            }}
          >
            Add Guest
          </Button>
        </Toolbar>
      </AppBar>

      <Card sx={{}}>
        <CardContent>
          <BarChart
            title="Attendance"
            xAxis={[
              {
                id: "barCategories",
                data: ["Soshthi", "Samptomi", "Asthomi", "Nobomi", "Doshomi"],
                scaleType: "band",
              },
            ]}
            series={[
              {
                data: [30, 50, 80, 80, 50],
              },
            ]}
            width={550}
            height={300}
          />
        </CardContent>
      </Card>
      <Card sx={{}}>
        <CardContent>
          <GuestTable guests={guests}></GuestTable>
        </CardContent>
      </Card>
    </Container>
  );
}
export default Profile;
