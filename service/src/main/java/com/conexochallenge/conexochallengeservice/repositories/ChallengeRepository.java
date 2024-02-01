package com.conexochallenge.conexochallengeservice.repositories;

import com.conexochallenge.conexochallengeservice.models.Challenge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChallengeRepository extends JpaRepository<Challenge, String>  {
}
