"use client";
import { Wrapper } from "@/layout";
import TeamDetailsMain from "@/components/teams/team-details";
import { instructors_data } from "@/data";
import { useDetailsInstructorsInfo } from "@/data/instructors/use-instructors";
import { useParams } from "next/navigation";

const TeamDetailsPage = () => {
  const { identifier } = useParams();

  const {
    data: team = {},
    isLoading,
    isFetching,
    error,
    refetch,
  } = useDetailsInstructorsInfo(identifier);

  return (
    <Wrapper>
      <TeamDetailsMain team={team} />
    </Wrapper>
  );
};

export default TeamDetailsPage;
