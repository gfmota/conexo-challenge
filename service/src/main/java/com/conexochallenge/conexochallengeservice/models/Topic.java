package com.conexochallenge.conexochallengeservice.models;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class Topic {
    private String name;

    private List<String> words;
}
