import { Wrapper } from "@/layout";
import TeamOneMain from "@/components/teams";

export const metadata = {
  title: 'Team One'
}

const TeamOnePage = () => {
    return (
        <Wrapper>
            <TeamOneMain />
        </Wrapper>
    )
}

export default TeamOnePage;