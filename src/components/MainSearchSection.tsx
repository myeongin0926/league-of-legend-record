import React from "react";
import { TextField, Button } from "@mui/material";
import { Container } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import img from "../images/searchSectionBackground.jpeg";
import useSummonerSearchForm from "../hooks/useSummonerSearchForm";

const MainSearchSection: React.FC = () => {
  const { formData, handleSummonerSearchChange, handleSummonerSearchSubmit } =
    useSummonerSearchForm({
      userName: "",
      tag: "",
    });

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "35vh",
        width: "100vw",
        background: `url(${img}) no-repeat center/cover`,
        boxShadow: "inset 100px 100px 100px 100px #000000a1",
      }}
    >
      <form onSubmit={handleSummonerSearchSubmit}>
        <TextField
          error
          variant="standard"
          placeholder="소환사명#KR1 전적검색"
          required
          value={formData.userName + formData.tag}
          onChange={handleSummonerSearchChange}
          sx={{
            height: 40,
            width: 350,
            pt: 1,
            pl: 2,
            bgcolor: "white",
            border: 1,
            borderColor: "white",
          }}
          InputProps={{
            endAdornment: (
              <Button
                disableRipple
                type="submit"
                sx={{
                  borderRadius: 0,
                  color: "black",
                  opacity: 0.7,
                  transition: "0.3s",
                  ":hover": {
                    opacity: 1,
                    bgcolor: "white",
                  },
                }}
              >
                <SearchIcon />
              </Button>
            ),
            disableUnderline: true,
          }}
        />
      </form>
    </Container>
  );
};

export default MainSearchSection;
