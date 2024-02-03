package com.conexochallenge.conexochallengeservice.controllers;

import com.conexochallenge.conexochallengeservice.models.dtos.ChallengeRequestDTO;
import com.conexochallenge.conexochallengeservice.models.dtos.ChallengeIdDTO;
import com.conexochallenge.conexochallengeservice.models.dtos.ChallengeResponseDTO;
import com.conexochallenge.conexochallengeservice.models.mappers.ChallengeMapper;
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
    public ResponseEntity<ChallengeResponseDTO> getChallenge(@PathVariable @NonNull String challengeId) {
        try {
            final var challenge = challengeService.getChallenge(challengeId);
            return ResponseEntity.ok(ChallengeMapper.mapToChallengeResponseDTO(challenge));
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("")
    public ResponseEntity<ChallengeIdDTO> postChallenge(@RequestBody @NonNull ChallengeRequestDTO challengeRequestDTO) {
        final var challengeId = challengeService.createChallenge(challengeRequestDTO);
        final var responseDto = new ChallengeIdDTO(challengeId);
        return ResponseEntity.ok(responseDto);
    }
}
