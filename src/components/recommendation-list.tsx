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
            <a href={recommendation.profileUrl}>Perfil no LinkedIn</a>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
