package com.conexochallenge.conexochallengeservice.models.dtos;

import com.conexochallenge.conexochallengeservice.models.Topic;

import java.util.List;

public record ChallengeResponseDTO (List<Topic> topics) {
}
