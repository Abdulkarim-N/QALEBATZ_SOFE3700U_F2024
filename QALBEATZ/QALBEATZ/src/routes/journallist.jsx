import { useParams } from "react-router-dom";
import useJournalist from "../hooks/useJournalist";
import JournalistTable from "../components/Layout/JournalistTable";
import JournalistHeader from "../components/MediaHeader/JournalistHeader";
import DotLoader from "../components/Loader/DotLoader";

export default function Journalist() {
  const { journalistId } = useParams();
  const [journalist] = useJournalist(journalistId);

  return (
    <div className="mt-20">
      {!journalist ? (
        <div className="flex items-center justify-center h-[15rem]">
          <DotLoader />
        </div>
      ) : (
        <>
          <JournalistHeader journalist={journalist} className="px-7" />
          <section>
            <JournalistTable articles={journalist.articles || []} />
          </section>
        </>
      )}
    </div>
  );
}
