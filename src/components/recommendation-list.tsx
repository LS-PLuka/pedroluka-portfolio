import { ArrowUpRightIcon } from "@/components/icons";
import type { Recommendation } from "@/content/types";

export function RecommendationList({
  recommendations,
}: {
  recommendations: readonly Recommendation[];
}) {
  return (
    <div className="recommendation-list">
      {recommendations.map((recommendation) => (
        <figure className="recommendation" key={recommendation.author}>
          <blockquote><p>“{recommendation.excerpt}”</p></blockquote>
          <figcaption>
            <strong>{recommendation.author}</strong>
            <span>{recommendation.relationship}</span>
            <span>{recommendation.period}</span>
            <a
              className="recommendation-profile-link"
              href={recommendation.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver perfil no LinkedIn <ArrowUpRightIcon />
            </a>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
