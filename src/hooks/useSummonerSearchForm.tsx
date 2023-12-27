import { useState } from "react";
import { useNavigate } from "react-router";

interface SummonerSearchForm {
  userName: string;
  tag: string;
}

const useSummonerSearchForm = (initialState: SummonerSearchForm) => {
  const [formData, setFormData] = useState<SummonerSearchForm>(initialState);
  const navigate = useNavigate();

  const handleSummonerSearchChange: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (e) => {
    const { value } = e.target;
    const lastIndex = value.lastIndexOf("#");
    const userName = value.substring(0, lastIndex);
    const tag = value.substring(lastIndex);
    setFormData({ userName, tag });
  };

  const handleSummonerSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { userName, tag } = formData;
    const cleanedUserName = userName.replace(/#/g, "").trim();
    const cleanedTag = tag.replace(/#/g, "").trim();

    if (cleanedUserName && cleanedTag) {
      navigate(`/summoner/${cleanedUserName}-${cleanedTag}`);
    } else {
      setFormData(initialState);
    }
  };

  return {
    formData,
    setFormData,
    handleSummonerSearchChange,
    handleSummonerSearchSubmit,
  };
};

export default useSummonerSearchForm;
