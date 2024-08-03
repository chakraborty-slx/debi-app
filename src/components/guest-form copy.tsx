import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import { push, ref } from "firebase/database";
import { useState } from "react";
import { db } from "../firebase/firebase";
import { Guest, TicketType } from "../types";
// Import firebase configuration from firebase.ts file

const GuestForm = () => {
  const [name, setName] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [total, setTotal] = useState(0);
  const [isStudent, setStudent] = useState(false);
  const [isVeg, setVeg] = useState(false);
  const [isCar, setCar] = useState(true);
  const [isPaid, setPaid] = useState(false);
  const [all5days, setAll5Days] = useState(false);

  const [day1, setDay1] = useState<TicketType>("None");
  const [day2, setDay2] = useState<TicketType>("None");
  const [day3, setDay3] = useState<TicketType>("None");
  const [day4, setDay4] = useState<TicketType>("None");
  const [day5, setDay5] = useState<TicketType>("None");

  const FormGrid = styled(Grid)(() => ({
    display: "flex",
    flexDirection: "column",
  }));

  const addGuest = () => {
    const guestRef = ref(db, "/guests");
    const guest: Guest = {
      name,
      isPresent: false,
      adults,
      children,
      isStudent,
      isVeg,
      isCar,
      total,
      paid: isPaid,
      day1,
      day2,
      day3,
      day4,
      day5,
      all5days,
      message: "",
    };
    push(guestRef, guest);
  };

  return (
    <Grid container sx={{ height: { xs: "100%", sm: "100%" } }}>
      <Grid
        item
        xs={12}
        sm={5}
        lg={4}
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          backgroundColor: "background.paper",
          borderRight: { sm: "none", md: "1px solid" },
          borderColor: { sm: "none", md: "divider" },
          alignItems: "start",
          pt: 4,
          px: 10,
          gap: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            width: "100%",
            maxWidth: { sm: "100%", md: 600 },
            // maxHeight: "720px",
            gap: { xs: 5, md: "none" },
          }}
        >
          <Grid container spacing={3}>
            <FormGrid item xs={12}>
              <FormLabel htmlFor="guest-name" required>
                Main name
              </FormLabel>
              <OutlinedInput
                id="guest-name"
                name="guest-name"
                type="name"
                placeholder="John"
                // autoFocus={true}
                // autoComplete="guest name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </FormGrid>
            <FormGrid item xs={12}>
              <InputLabel id="day1-select-label">Shashthi</InputLabel>
              <FormControl>
                <Select
                  id="day1"
                  value={day1}
                  onChange={(e) => setDay1(e.target.value as TicketType)}
                >
                  <MenuItem value={"None"}>None</MenuItem>
                  <MenuItem value={"Full"}>Full</MenuItem>
                  <MenuItem value={"Visitor"}>Visitor</MenuItem>
                </Select>
              </FormControl>
            </FormGrid>
            <FormGrid item xs={12}>
              <InputLabel id="day2-select-label">Saptami</InputLabel>
              <FormControl>
                <Select
                  id="day2"
                  value={day2}
                  label="Saptami"
                  onChange={(e) => setDay2(e.target.value as TicketType)}
                >
                  <MenuItem value={"None"}>None</MenuItem>
                  <MenuItem value={"Full"}>Full</MenuItem>
                  <MenuItem value={"Half"}>Half</MenuItem>
                  <MenuItem value={"Visitor"}>Visitor</MenuItem>
                </Select>
              </FormControl>
            </FormGrid>
            <FormGrid item xs={12}>
              <InputLabel id="day3-select-label">Ashtami</InputLabel>
              <FormControl>
                <Select
                  id="day3"
                  value={day3}
                  label="Ashtami"
                  onChange={(e) => setDay3(e.target.value as TicketType)}
                >
                  <MenuItem value={"None"}>None</MenuItem>
                  <MenuItem value={"Full"}>Full</MenuItem>
                  <MenuItem value={"Half"}>Half</MenuItem>
                  <MenuItem value={"Visitor"}>Visitor</MenuItem>
                </Select>
              </FormControl>
            </FormGrid>
            <FormGrid item xs={12}>
              <InputLabel id="day4-select-label">Nabami</InputLabel>
              <FormControl>
                <Select
                  id="day4"
                  value={day4}
                  label="Nabami"
                  onChange={(e) => setDay4(e.target.value as TicketType)}
                >
                  <MenuItem value={"None"}>None</MenuItem>
                  <MenuItem value={"Full"}>Full</MenuItem>
                  <MenuItem value={"Half"}>Half</MenuItem>
                  <MenuItem value={"Visitor"}>Visitor</MenuItem>
                </Select>
              </FormControl>
            </FormGrid>
            <FormGrid item xs={12}>
              <InputLabel id="day5-select-label">Dashami</InputLabel>
              <FormControl>
                <Select
                  id="day5"
                  value={day5}
                  label="Dashami"
                  onChange={(e) => setDay5(e.target.value as TicketType)}
                >
                  <MenuItem value={"None"}>None</MenuItem>
                  <MenuItem value={"Full"}>Full</MenuItem>
                  <MenuItem value={"Visitor"}>Visitor</MenuItem>
                </Select>
              </FormControl>
            </FormGrid>
            <FormGrid item xs={12} md={6}>
              <FormLabel htmlFor="Adults" required>
                Adults
              </FormLabel>
              <OutlinedInput
                id="adults"
                name="adults"
                type="adults"
                value={adults}
                placeholder="0"
                autoComplete="0"
                required
                onChange={(e) =>
                  setAdults(Number(e.target.value as TicketType))
                }
              />
            </FormGrid>
            <FormGrid item xs={12} md={6}>
              <FormLabel htmlFor="Children" required>
                Children
              </FormLabel>
              <OutlinedInput
                id="children"
                name="children"
                type="children"
                placeholder="0"
                autoComplete="0"
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
                required
              />
            </FormGrid>{" "}
            <FormGrid item xs={12}>
              <FormLabel htmlFor="Total" required>
                Total
              </FormLabel>
              <OutlinedInput
                id="total"
                name="total"
                type="total"
                placeholder="0"
                autoComplete="0"
                value={total}
                onChange={(e) => setTotal(Number(e.target.value))}
                required
              />
            </FormGrid>
            <FormGrid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="isVeg"
                    value={isVeg}
                    onChange={(e) => setVeg(Boolean(e.target.value))}
                  />
                }
                label="Is Veg"
              />
            </FormGrid>
            <FormGrid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="isStudent"
                    value={isStudent}
                    onChange={(e) => setStudent(Boolean(e.target.value))}
                  />
                }
                label="Is Student"
              />
            </FormGrid>
            <FormGrid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="isCar"
                    value={isCar}
                    onChange={(e) => setCar(Boolean(e.target.value))}
                  />
                }
                label="Commuting by car?"
              />
            </FormGrid>
            <FormGrid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="paid"
                    value={isPaid}
                    onChange={(e) => setPaid(Boolean(e.target.value))}
                  />
                }
                label="Paid"
              />
            </FormGrid>
            <FormGrid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="All5Days"
                    value={all5days}
                    onChange={(e) => setPaid(Boolean(e.target.value))}
                  />
                }
                label="All 5 Days"
              />
            </FormGrid>
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            width: "100%",
            maxWidth: { sm: "100%", md: 1000 },
            // maxHeight: "720px",
            gap: { xs: 5, md: "none" },
          }}
        >
          <Button
            variant="contained"
            // endIcon={<ChevronRightRoundedIcon />}
            onClick={addGuest}
            sx={{ width: { xs: "100%", sm: "fit-content" } }}
          >
            {"Submit"}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default GuestForm;
