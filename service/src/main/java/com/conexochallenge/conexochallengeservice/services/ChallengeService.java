package com.conexochallenge.conexochallengeservice.services;

import com.conexochallenge.conexochallengeservice.models.Challenge;
import com.conexochallenge.conexochallengeservice.models.dtos.ChallengeDTO;
import com.conexochallenge.conexochallengeservice.repositories.ChallengeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChallengeService {
    @Autowired
    private ChallengeRepository challengeRepository;

    public String createChallenge(ChallengeDTO challengeDTO) {
        final var challenge = new Challenge(challengeDTO);
        challengeRepository.save(challenge);
        return challenge.getId();
    }

    public Challenge getChallenge(String id) {
        return challengeRepository.getReferenceById(id);
    }
}
