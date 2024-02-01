package com.conexochallenge.conexochallengeservice.controllers;

import com.conexochallenge.conexochallengeservice.models.Challenge;
import com.conexochallenge.conexochallengeservice.models.dtos.ChallengeDTO;
import com.conexochallenge.conexochallengeservice.models.dtos.ChallengeIdDTO;
import com.conexochallenge.conexochallengeservice.services.ChallengeService;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/challenge")
public class ChallengeController {
    @Autowired
    private ChallengeService challengeService;

    @GetMapping("{challengeId}")
    public ResponseEntity<Challenge> getChallenge(@PathVariable @NonNull String challengeId) {
        final var challenge = challengeService.getChallenge(challengeId);
        if (challenge == null) {
            return ResponseEntity.ok(challenge);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("")
    public ResponseEntity<ChallengeIdDTO> postChallenge(@RequestBody @NonNull ChallengeDTO challengeDTO) {
        final var challengeId = challengeService.createChallenge(challengeDTO);
        final var responseDto = new ChallengeIdDTO(challengeId);
        return ResponseEntity.ok(responseDto);
    }
}
