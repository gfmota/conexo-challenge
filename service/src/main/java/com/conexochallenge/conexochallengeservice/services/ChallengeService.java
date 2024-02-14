package com.conexochallenge.conexochallengeservice.services;

import com.conexochallenge.conexochallengeservice.models.Challenge;
import com.conexochallenge.conexochallengeservice.models.dtos.ChallengeRequestDTO;
import com.conexochallenge.conexochallengeservice.repositories.ChallengeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

@Service
public class ChallengeService {
    @Autowired
    private ChallengeRepository challengeRepository;

    public String createChallenge(ChallengeRequestDTO challengeRequestDTO) {
        final var challenge = new Challenge(challengeRequestDTO);
        challengeRepository.save(challenge);
        return challenge.getId();
    }

    @Cacheable("challenge")
    public Challenge getChallenge(String id) { return challengeRepository.findById(id).orElseThrow(); }
}
