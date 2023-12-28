import React from "react";
import { TextField, Button } from "@mui/material";
import { Container } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import useSummonerSearchForm from "../hooks/useSummonerSearchForm";
import { PUBLIC_IMAGE_URL } from "../constants/MessageFormat";

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
        height: "40vh",
        background: `url(${PUBLIC_IMAGE_URL(
          "/images/searchSectionBackground.jpeg",
        )}) no-repeat center/cover`,
        boxShadow: "inset 0 100px 100px 100px #000000a1",
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
            height: 50,
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
